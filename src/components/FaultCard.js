import {Card, Tag} from 'antd';
import Alert from '../alert.svg';
import {FieldTimeOutlined, ToTopOutlined} from '@ant-design/icons';

const FaultCard = ({fault}) => {
    const mahalleler = fault.Mahalleler.split(',');
    const date = new Date(fault.GuncellemeTarihi);
    const reformatDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes();
    return (
        <Card
            title={
                <span>
                    <h3 className={'cardTitle'}>{fault.IlceAdi} </h3>
                    <img src={Alert} className={'alertIcon'} alt={'alertIcon'}/>
                </span>}
            bordered={true}
            className={'card'}
            hoverable={true}
            actions={[
                <span className={'detail'}><ToTopOutlined/> Detaylar</span>,
                <span className={'date'}><FieldTimeOutlined/> {reformatDate}</span>

            ]}
        >
            <div className={'regions'}>
                {
                    mahalleler.map(mahalle => <Tag className={'tag'} key={mahalle} color="orange">{mahalle}</Tag>)
                }
            </div>
            <div className={'time'}>
                <h3 className={'message'}>{fault.KesintiSuresi}</h3>
            </div>

        </Card>
    )
}

export default FaultCard;