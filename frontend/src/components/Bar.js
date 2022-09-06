import { useSpring, animated, config } from 'react-spring'

export const Bar =({width})=> {
    const styles = useSpring({
        width:  width>0 ? `${width}%` : "0",
        height: "1em",
        backgroundColor:"pink",
        config: config.molasses
    })    
    return ( 
        <>
        { width>0 && 
            <animated.div style={styles}></animated.div>
        }
        </>
    )
}
