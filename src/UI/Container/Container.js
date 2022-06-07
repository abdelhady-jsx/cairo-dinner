import classes from './Container.module.css'

export const ContainerFluid = ({ children }) => {
    return (<div className={classes.containerFluid}>
        {children}
    </div>)
}

const Container = ({ children }) => {
    return (<div className={classes.container}>
        {children}
    </div>)
}

export default Container