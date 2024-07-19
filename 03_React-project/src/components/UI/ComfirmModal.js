
import './ComfirmModal.css'
import PopBg from './PopBg'
const ComfirmModal = (props)=>{
    return <PopBg>

        <div className="comfirmModal-box">
            <p className="tip">该操作不可恢复！确认吗？</p>
            <div className="btn-box">
                <button onClick={props.onModalSure} className="sure">确认</button>
                <button onClick={props.onModalCancel} className="cancel">取消</button>
            </div>
        </div>
    </PopBg>
    
    
}
export default ComfirmModal