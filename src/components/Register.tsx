import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Modal, Input, Space, Button } from 'antd'

const Register = ({ onClose, isOpened }: { onClose: any; isOpened: any }) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <>
      <Modal
        title="Register"
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
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="Enter name" />
          <Input placeholder="Enter email" />
          <Input.Password
            placeholder="Create Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Space>
      </Modal>
    </>
  )
}

export default Register
