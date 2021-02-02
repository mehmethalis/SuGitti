import React, {useState, useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchFaults} from './actions/FaultAction';
import {Drawer, Button, Row, Col, Spin} from 'antd/lib';
import WaterLogo from './drop.svg';
import ResponseResult from "./components/ResponseResult";
import FaultCard from "./components/FaultCard";
import sampleData from "./sampleData";
import {GithubOutlined} from '@ant-design/icons';


const App = (props) => {
    const {fetchFaults} = props;
    const [visible, setVisible] = useState(false);
    const [fault, setFault] = useState(sampleData);

    const onClose = () => {
        setVisible(false)
    };

    useEffect(() => {
        fetchFaults()
    }, [fetchFaults])

    const faults = props.state.FaultReducer.faults;

    const refresh = () => {
        fetchFaults()
    }
    return (
        <>
            <div className="App">
                <img src={WaterLogo} alt={'Su Logosu'} className={'waterLogo'}/>
                <Button loading={props.state.FaultReducer.fetching} shape="round" className={'refreshButton'}
                        onClick={refresh}>Yenile
                </Button>
                <h2>İzmir Büyükşehir Belediyesi Güncel Arıza Kaynaklı Su Kesintileri</h2>
                <hr/>

                <Row align={'middle'} justify={'center'} className={'row'}>
                    {props.state.FaultReducer.fetching && <Spin className={'spinner'} size="large"/>}
                    {
                        props.state.FaultReducer.error ? <ResponseResult error={props.state.FaultReducer.error}/> :
                            faults.map((fault) => {
                                return (
                                    <Col xs={24} sm={24} md={12} lg={8} xl={8} key={fault.ArizaID}>
                                        <a href={'/#'} onClick={() => {
                                            setFault(fault)
                                            setVisible(true)
                                        }}>
                                            <FaultCard fault={fault}/>
                                        </a>
                                    </Col>)
                            })
                    }
                </Row>
                <Drawer
                    height={400}
                    bodyStyle={{
                        backgroundColor: '#aee1e1',
                        fontWeight: 600,
                        color: '#0f1123'
                    }}
                    headerStyle={{
                        backgroundColor: '#aee1e1',
                        fontWeight: 800,
                        color: '#0f1123'
                    }}
                    title={<h2 className={'drawerTitle'}>{fault.IlceAdi}</h2>}
                    placement={'bottom'}
                    closable={true}
                    onClose={onClose}
                    visible={visible}
                    key={'bottom'}
                >
                    <Row align={'top'} justify={'center'}>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <div className={'drawerSection'}>
                                <span>Kesinti Tarihi :</span>
                                <h3>{fault.KesintiTarihi}</h3>
                                <span>Arıza Giderilme Tarihi:</span>
                                <h3>{fault.ArizaGiderilmeTarihi}</h3>
                                <span>Arıza Tipi :</span>
                                <h3>{fault.Tip}</h3>
                                <span>Birim :</span>
                                <h3>{fault.Birim}</h3>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <div className={'drawerSection'}>
                                <span>İlçe :</span>
                                <h3>{fault.IlceAdi}</h3>
                                <span>Mahalleler :</span>
                                <h3>{fault.Mahalleler}</h3>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <div className={'drawerSection'}>
                                <span>Açıklama :</span>
                                <h3>{fault.Aciklama}</h3>
                                <span>Kesinti Süresi :</span>
                                <h3>{fault.KesintiSuresi}</h3>
                            </div>
                        </Col>
                    </Row>
                </Drawer>
            </div>
            <footer className={'footer'}>
                <span className={'copyright'}>©{new Date().getFullYear()} Tüm Hakları Saklıdır. | Veriler <a
                    href={'https://acikveri.bizizmir.com/'} target={'_blank'} rel="noreferrer">Açık Veri İzmir</a> Portalına Aittir. </span>
                <a className={'github'} href={'https://github.com/mehmethalis/SuGitti'} target={'_blank'}
                   rel="noreferrer"><GithubOutlined className={'githubIcon'}/> GitHub</a>
            </footer>
        </>
    );
}

const mapStateToProps = state => {
    return {
        state
    }
};

const mapDispatchToProps = {
    fetchFaults
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
