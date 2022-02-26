import styles from '../stylesheets/base.module.sass'
import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import Footer from './footer'


export default function Base({
  title,
  inputs,
  onInputBlur,
  onInputFocus,
  onInputChange,
  onSubmit,
  errorMsg,
  button_title,
  footer_content
}) {
  return (
      <>
            <div className={styles.header}>
                <div><a href={`/`}>Apni Market</a></div>
            </div>
            <div className={styles.outbox}>
                <div className={styles.title_style}>
                    <p><span>{title}</span><br/></p>
                </div>
                <div classNmae = {styles.border_style}></div>
                {
                  inputs.map(({ name, validations }) =>
                    <FormInput
                      key={name}
                      name={name}
                      validations={validations}
                      errorMessage={errorMsg[name].errorMsg}
                      onChange={onInputChange}
                      onBlur={onInputBlur}
                      onFocus={onInputFocus}
                    />
                  )
                }
                <Button button_title={button_title} onClick={onSubmit} />
                <Footer content={footer_content} />
            </div>
        </>
  )
}



