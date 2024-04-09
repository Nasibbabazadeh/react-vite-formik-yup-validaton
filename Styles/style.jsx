import styled from 'styled-components'

export const Container = styled.div`
    width: 33%;
    height: 95%;
    border: none;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    background: #e1ebee;
`
export const Form = styled.form`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
`
export const ButtonStyle = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 30px;
    font-size: 24px;
    background: #353b48;
    color: white;
    transition: all 0.4s;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    margin-top: 20px;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`
export const InputStyle = styled.input`
    width: 200px;
    height: 40px;
    border-radius: 8px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`
export const InputField = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    gap: 5px;
`
export const ErrorMessage = styled.div`
    width: 100%;
    font-size: 19px;
    color: #b33939;
    text-align: center;
`
