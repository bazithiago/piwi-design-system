import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import '../../../styles/global.css'
import { ButtonStyles } from '../general/Button'
import { ReactComponent as ChevronDown } from '../../../assets/icons/chevron-down.svg'
import { ReactComponent as FilterAdjust } from '../../../assets/icons/filter-adjust.svg'

const ButtonWithIconsStyles = styled(ButtonStyles)`
    
    svg {
        margin: -12px 0 -12px 0.75rem;
        
        & > path {
            fill: var(--blue);
        }
    }

    :hover {
        svg > path {
            fill: var(--white);
        }
    }
`

export function Export ({ label, ...rest }) {
    return(
        <ButtonWithIconsStyles {...rest} secondary > 
            {label}
            <ChevronDown />
        </ButtonWithIconsStyles>
    )
} 

export function Filter ({ label, ...rest }) {
    return(
        <ButtonWithIconsStyles {...rest} secondary > 
            {label}
            <FilterAdjust />
        </ButtonWithIconsStyles>
    )
} 

Export.propTypes = {
    label: PropTypes.string.isRequired,
}

Filter.propTypes = {
    label: PropTypes.string.isRequired,
}