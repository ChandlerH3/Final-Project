import { useSpring, animated, config } from 'react-spring'

export const Bar =({width})=> {
    console.log(typeof Number(width))
    const styles = useSpring({
        val: width>0 ? Number(width) : 0,
        width:  width>0 ? `${width}%` : "0",
        height: "1em",
        backgroundColor:"black",
        config: config.molasses
    })    
    return ( 
        <>
        { width>0 && 
            <>
            <animated.div style={styles}></animated.div>
            <animated.div>{styles.val.to(val => Math.floor(val))}</animated.div>
            </>
        }
        </>
    )
}
