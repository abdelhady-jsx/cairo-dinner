import { ContainerFluid } from '../Container/Container'
import classes from './Form.module.css'

const Form = ({ title, desc, children, onSubmit }) => {
    return (
        <ContainerFluid>
            <form className={classes.form} onSubmit={onSubmit}>
                <div className={classes.info}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                {children}
            </form>
        </ContainerFluid>
    )
}

export default Form