import React, { useId } from 'react'
import Select from 'react-select'
import styles from '@/app/page.module.css'
import { CSSObject } from 'styled-components'

const options = [
  { value: '1', label: 'All Products' },
  { value: '2', label: 'phone' },
  { value: '3', label: 'other' },
]
const getcss = (state: any) => {
  return {
    borderColor: state.isFocused ? 'grey' : 'red',
    borderRadius: '30px',
    width: '16em',
    color: 'fuchsia !important',
    cursor: 'pointer',
  }
}
const SelectOption = () => {
  return (
    <Select
      instanceId={useId()}
      styles={{
        control: (baseStyles: object, state: object) => ({
          ...baseStyles,
          ...getcss(state),
        }),
      }}
      options={options}
    />
  )
}
export default SelectOption
