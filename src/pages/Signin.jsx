import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { Button, Form, Icon, Message, Modal } from 'semantic-ui-react'
import { loginAction, resetMessage } from '../redux/actions/userAction';

function validateEmail(email) {
    // console.log(email);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function Signin() {
    const { token, errorMess, loading } = useSelector(state => state.user)
    const history = useHistory()
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (errorMess) setOpen(true)
    }, [errorMess])

    const [status, setStatus] = useState({
        email: null,
        password: null
    })

    const onHandleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = values
        dispatch(loginAction(email, password, history))
    }

    const onHandleChange = e => {
        const { name, value } = e.target
        setStatus({ ...status, [name]: null })
        setValues({ ...values, [name]: value })
        if (value.length <= 0) {
            setStatus({ ...status, [name]: `${name} is required` })
        }
        if (name === 'email') {
            const check = validateEmail(value)

            if (!check) {
                setStatus({ ...status, [name]: 'Email is not valid!!' })
            }
        }
    }
    if (token) {
        return <Redirect to="/" />
    }

    const onHandleCloseModal = () => {
        setOpen(false)
        dispatch(resetMessage)
    }
    return (
        <div className='form-container'>
            <Form onSubmit={onHandleSubmit} loading={loading} >
                <h1>Sign in</h1>
                <Form.Input
                    label="Email"
                    placeholder="Email..."
                    name="email"
                    value={values.email}
                    onChange={onHandleChange}
                    error={status.email}
                />
                <Form.Input
                    label="Password"
                    type="password"
                    placeholder="Password..."
                    name="password"
                    value={values.password}
                    onChange={onHandleChange}
                    error={status.password}
                />
                {/* disabled={(values.email && values.password) ? false : true} */}
                <Button color='orange' type='submit' disabled={(values.email && values.password && !status.email) ? false : true}>
                    Submit
                </Button>
                <Message
                    info
                    // header='Account to Login'
                    list={[
                        'Email:    admin@gmail.com',
                        'PassWord: 123456',
                    ]}
                />
            </Form>

            <Modal
                size='mini'
                open={open}
                onClose={onHandleCloseModal}
            // onOpen={() => setOpen(true)}
            >
                <Modal.Header>{errorMess}</Modal.Header>
                <Modal.Content>
                    <strong>Email: </strong>admin@gmail.com
                    <br />
                    <strong>Password: </strong> 123456
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={onHandleCloseModal}>
                        <Icon name='checkmark' /> Yes
                        </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default Signin
