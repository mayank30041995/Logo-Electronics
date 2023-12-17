import React, { useId } from 'react'
import Select from 'react-select'
import styles from '@/app/page.module.css'
import { CSSObject } from 'styled-components'

const getcss = (state: any) => {
  return {
    borderColor: state.isFocused ? 'grey' : 'red',
    borderRadius: '30px',
    width: '16em',
    color: 'fuchsia !important',
    cursor: 'pointer',
  }
}
const SelectOption = ({
  options,
  filterBy,
}: {
  options: string[]
  filterBy: any
}) => {
  const optionsArray =
    options && options.map((option, i) => ({ value: i, label: option }))

  return (
    <Select
      instanceId={useId()}
      styles={{
        control: (baseStyles: object, state: object) => ({
          ...baseStyles,
          ...getcss(state),
        }),
      }}
      onChange={(e) => filterBy(e?.label)}
      options={optionsArray}
    />
  )
}
export default SelectOption
