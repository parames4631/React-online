import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const ContactMe = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4">
                    <Card>
                        <Card.Header>Contact Me</Card.Header>
                        <Card.Body>
                            <Card.Title>Parames Sripeth</Card.Title>
                            <Card.Text>
                            ณ แหล่งนี้ที่พักจิต ณ แหล่งนี้เรามีมิตรที่ยิ่งใหญ่ ณ แหล่งนี้เรามีสุขกว่าที่ใด ณ แหล่งนี้สายธารใจไหลสู่เรา สวัสดีครับ ชื่อเล่น โด่ง เพื่อนเรียกแว่นบ้าง พี่แจ๊สบ้าง ขอบคุณครับ <BsEmojiSunglasses/>  
                                <li className="mt-3">วิชาที่ชอบเรียนคือ music and sound แต่ไม่ได้เรียนเนื่องจากมันเต็มครับ อนาคตอยากทำงานเกี่ยวกับวงการภาพยนตร์ครับ </li>
                                <li className="mt-3">เทคนิคไมโล เทคโนโอวัลติน </li>
                                <li className="mt-3">ป้ายหน้าไม่ยุ่ง มุ่งตรงพนมเปญ </li>
                                <li className="mt-3">เธอเป็นใครถึงเลือกเขาอะ ขนาดพระอะ ยังเลือกฉันเลย </li>
                            </Card.Text>
                            <Button variant="danger" href="https://github.com/parames4631">Contact Me <BsGithub/></Button>
                                <p className="mt-3">Contact Me: Sr.parames_st@tni.ac.th</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
