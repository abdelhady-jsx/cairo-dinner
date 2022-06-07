import classes from './Container.module.css'

export const ContainerFluid = ({ children, bgColor, textColor }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor }} className={classes.containerFluid}>
        {children}
    </div>)
}

export const Row = ({ children, bgColor, textColor }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor }} className={classes.row}>
        {children}
    </div>)
}

export const Col = ({ children, bgColor, textColor }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor }} className={classes.col}>
        {children}
    </div>)
}

const Container = ({ children, bgColor, textColor }) => {
    return (<div style={{ backgroundColor: bgColor, color: textColor }} className={classes.container}>
        {children}
    </div>)
}

export default Container