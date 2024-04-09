import { ButtonStyle } from '../Styles/style'
export const Button = (props) => {
    const { disabled, ...restProps } = props
    return (
        <>
            <ButtonStyle {...restProps} disabled={disabled}>
                Sign up
            </ButtonStyle>
        </>
    )
}
