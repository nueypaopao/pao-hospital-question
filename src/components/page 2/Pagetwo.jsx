import React from 'react'
import Finger from './Finger';
import "./pagetwo.css";
import Layout from '../layout/Layout';
import "../../assets/css/abs.css";

const Pagetwo = () => {
  return (
    <section className="pagetwo section" id="pageone">
        <h2 className="pagetwo__title">คำถามถัดไป</h2>
        <span className="pagetwo__subtitle">คำถามเรื่องอาการปวดข้อนิ้วมือ</span>

        <Layout>
          <Finger />
        </Layout>

    </section>
  )
}

export default Pagetwo