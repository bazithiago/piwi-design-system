import styled, { css } from 'styled-components'
import '../../../src/styles/global.css'

export const LabelStyles = styled.button`
    background-color: transparent;
    border: 2px solid var(--blue);
    border-radius: 4px;
    color: var(--blue);
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.75rem;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    padding: 0.2rem 0.75rem;
    
    :hover {
        background-color: var(--blue);
        color: var(--white);
    }

    span {
        margin-left: 0.75rem;
    }

    ${props => props.isSelected && css`
        background-color: var(--blue);
        color: var(--white);

        :hover{
            filter: brightness(1.1);
        }
    `}
`

export const labelContent = (label, number) => <>{label}<span>{number || '   x'}</span></>

export function Label ({ label, number, children, ...rest }) {
    return(
        <LabelStyles {...rest} >
            {children || labelContent(label, number)}
        </LabelStyles>
    )
} 