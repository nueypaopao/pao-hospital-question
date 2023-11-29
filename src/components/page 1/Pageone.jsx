import React from 'react'
import "./pageone.css";
import Layout from '../layout/Layout';
import Abs from './Abs';
import "../../assets/css/abs.css";

const Pageone = () => {
  return (
    <section className="pageone section" id="pageone">
        <h2 className="pageone__title">แบบสอบถามด้านสุขภาพ</h2>
        <span className="pageone__subtitle">คำถามเรื่องอาการปวดท้อง</span>

        <Layout>
          <Abs />
        </Layout>

    </section>
  )
}

export default Pageone