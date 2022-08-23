import MainImg from '../assets/Imgs/Background.jpg'
const MAinimg=()=>{
    return (
        <div style={{
            backgroundColor: "var( --e-global-color-primary )",
    opacity: "0.8",
    transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
    position:"relative"
        }}>
            <img src={MainImg}/>
            <div style={{position:"absolute"}}>
                <h3>Make Layouti your digital agency partner</h3>
                <span>Our experts blend proprietary methodologies and innovative approaches with tried-and-true digital techniques to deliver extraordinary results.</span>
            </div>
        </div>
    )
    }
    
    export default MAinimg;