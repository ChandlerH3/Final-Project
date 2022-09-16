import { useSpring, animated, config } from 'react-spring'

export const Bar =({width, text})=> {
    const styles = useSpring({
        text: text,
        val: width>0 ? Number(width) : 0,
        width:  width>0 ? `${width}%` : "0",
        height: "1em",
        backgroundColor:"#B98F20",
        config: config.molasses
    })    
    return ( 
        <>
        { width>0 && 
            <div style={{display:"flex", alignItems:"center"}}>
            <animated.div style={{...styles, marginRight: "10px"}}></animated.div>
            <animated.div>{styles.val.to(val => Math.floor(val))}</animated.div>
            <animated.div>{styles.text}</animated.div>
            </div>
        }
        </>
    )
}
