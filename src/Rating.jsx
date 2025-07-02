// import { Pagination } from "antd";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Pagination } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';


const Rating=()=>{
    return(
        
        <>
        <h1>Ant Design</h1>
        <Steps
    items={[
      {
        title: 'Login',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: 'Verification',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Pay',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Done',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
        <Pagination defaultCurrent={1} total={50} />
        

        <h1>Material UI</h1>
        </>
    )
}
export default Rating;