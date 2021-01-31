import React, {useState, useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchFaults} from './actions/FaultAction';
import {Drawer, Button, Row, Col} from 'antd';
import WaterLogo from './drop.svg';


const App = (props) => {
    const {fetchFaults} = props;
    const [visible, setvisible] = useState(false);
    const [faut, setFault] = useState({name: 'halis', surname: 'çiçek'});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetchFaults()
    }, [fetchFaults])

    const faults = props.state.FaultReducer.faults


    const onClose = () => {
        setvisible(false)
    };

    const refresh = () => {
        setLoading(true)
        fetchFaults()
        setLoading(false)
    }
    return (
        <div className="App">
            <img src={WaterLogo} alt={'Su Logosu'} className={'waterLogo'}/>
            <Button loading={isLoading} shape="round" className={'refreshButton'} onClick={refresh}>Yenile</Button>
            <h2>İzmir Büyükşehir Belediyesi Güncel Arıza Kaynaklı Su Kesintileri</h2>

            <hr/>
            <Row align={'middle'} justify={'center'}>
                {
                    faults.map((fault) => {
                        return (
                            <Col xs={2} sm={4} md={8} lg={8} xl={8} key={fault.ArizaID}>
                                <Button
                                    onClick={() => {
                                        setFault({name: fault.IlceAdi, surname: fault.KesintiTarihi})
                                        setvisible(true)
                                    }}> {fault.IlceAdi}</Button>
                            </Col>)
                    })
                }

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
