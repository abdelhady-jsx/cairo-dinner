import classes from './Container.module.css'

export const ContainerFluid = ({ children, bgColor, textColor, style }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor, ...style }} className={classes.containerFluid}>
        {children}
    </div>)
}

export const Row = ({ children, bgColor, textColor }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor }} className={classes.row}>
        {children}
    </div>)
}

export const Col = ({ children, bgColor, textColor, type }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor }} className={type === 'half' ? classes.colHalf : type === 'quarter' ? classes.colQuarter : classes === 'third' ? classes.colThird : classes.colFull}>
        {children}
    </div>)
}

export const RotatedTexture = ({ children, bgColor, textColor }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor }} className={classes.rotatedTexture}>
        {children}
    </div>)
}

const Container = ({ children, bgColor, textColor, style }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor, ...style }} className={classes.container}>
        {children}
    </div>)
}

export default Container