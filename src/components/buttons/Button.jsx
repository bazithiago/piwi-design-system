import styled, { css } from 'styled-components'
import '../../styles/global.css'
import PropTypes from 'prop-types'

const ButtonStyles = styled.button`
    border: none;
    color: var(--white);
    background-color: var(--grey3);
    padding: 0.5rem 2rem;
    text-align: center;
    display: inline-block;
    font-size: 0.75rem;
    border-radius: 50rem;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;

    :hover {
        filter: brightness(0.9);
    }

    /* PRIMARY */
    ${props => props.primary && css`
        background-color: var(--blue);
        color: var(--white);

        :hover {
            filter: brightness(1.1);
        }

    `}
`

export function Button ({ label, ...rest }) {
    return(
        <ButtonStyles {...rest}>
            {label}
        </ButtonStyles>
    )
} 

Button.propTypes = {
    label: PropTypes.string.isRequired,
}

Button.defaultProps = {
    label: 'Primary button',
    primary: true,
}