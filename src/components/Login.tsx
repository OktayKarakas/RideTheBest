import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Modal, Input, Space, Button } from 'antd'

const Login = ({
  onClose,
  isOpened,
  isWantRegister,
}: {
  onClose: any
  isOpened: any
  isWantRegister: any
}) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <>
      <Modal
        title="Login"
        centered
        onOk={onClose}
        okText="Register"
        visible={isOpened}
        onCancel={onClose}
        width={500}
        transitionName=""
        maskTransitionName=""
        className="register-modal"
        cancelButtonProps={{ style: { display: 'none' } }}
        footer={[
          <Button key="submit" type="primary" onClick={onClose}>
            Login
          </Button>,
          <Button key="back" onClick={isWantRegister}>
            Don't have an account?
          </Button>,
        ]}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="Enter email" />
          <Input.Password
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>
      </Modal>
    </>
  )
}

export default Login
