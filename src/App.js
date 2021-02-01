import React, {useState, useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchFaults} from './actions/FaultAction';
import {Drawer, Button, Row, Col, Spin} from 'antd';
import WaterLogo from './drop.svg';
import ResponseResult from "./components/ResponseResult";
import FaultCard from "./components/FaultCard";


const App = (props) => {
    const {fetchFaults} = props;
    const [visible, setVisible] = useState(false);
    const [faut, setFault] = useState({name: 'halis', surname: 'çiçek'});


    useEffect(() => {
        fetchFaults()
    }, [fetchFaults])

    const faults = props.state.FaultReducer.faults


    const onClose = () => {
        setVisible(false)
    };

    const refresh = () => {
        fetchFaults()
    }
    return (
        <div className="App">
            <img src={WaterLogo} alt={'Su Logosu'} className={'waterLogo'}/>
            <Button loading={props.state.FaultReducer.fetching} shape="round" className={'refreshButton'}
                    onClick={refresh}>Yenile</Button>
            <h2>İzmir Büyükşehir Belediyesi Güncel Arıza Kaynaklı Su Kesintileri</h2>

            <hr/>
            <Row align={'middle'} justify={'center'} className={'row'}>
                {props.state.FaultReducer.fetching && <Spin className={'spinner'} size="large"/>}
                {props.state.FaultReducer.error ? <ResponseResult error={props.state.FaultReducer.error}/> :
                    faults.map((fault) => {
                        return (
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} key={fault.ArizaID}>
                                <a href={'/#'} onClick={() => {
                                    setFault({name: fault.IlceAdi, surname: fault.KesintiTarihi})
                                    setVisible(true)
                                }}>
                                    <FaultCard fault={fault}/>
                                </a>

                            </Col>)
                    })}


            </Row>


            <Drawer
                title="Basic Drawer"
                placement={'bottom'}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={'bottom'}
            >
                <p>{faut.name}</p>
                <p>{faut.surname}</p>
            </Drawer>
        </div>
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
