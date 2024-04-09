import { InputStyle } from '../Styles/style'
export const Input = (props) => {
    const { label, ...restProps } = props
    return (
        <>
            <InputStyle {...restProps} />
        </>
    )
}
