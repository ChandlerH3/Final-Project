import { useSpring, animated, config } from 'react-spring'

export const Bar =({width})=> {
    const styles = useSpring({
        width:  width!==50 ? `${width}%` : "0",
        height: "1em",
        backgroundColor:"black",
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
