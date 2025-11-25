import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './root.module.scss'

type FormData = {
  name: string
  email: string
  why: string
}

export default function Home() {
  const [inviteUrl, setInviteUrl] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError: setFormError,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const result = await response.json()
      setInviteUrl(result.inviteUrl)
    } catch (err) {
      setFormError('root', {
        type: 'manual',
        message: 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <>
      <Head>
        <title>Denver Tech Talk</title>
        <meta name="description" content="Community for Colorado coders and tech adjacent professionals or those with an interest." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="https://denvertechtalk.com/preview.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Denver Tech Talk<sup>*</sup></h1>
        <div className={styles.copy}>
          <p className={styles.description}>
            <sup>*</sup>You don&apos;t have to be in Denver. You don&apos;t have to know how to code.
          </p>
          <p>
            <span className={styles.blue}>C</span><span className={styles.pink}>o</span><span className={styles.clementine}>m</span><span className={styles.nectarine}>m</span><span className={styles.highlighter}>u</span><span className={styles.blue}>n</span><span className={styles.pink}>i</span><span className={styles.clementine}>t</span><span className={styles.nectarine}>y</span> <span className={styles.highlighter}>G</span><span className={styles.blue}>u</span><span className={styles.pink}>i</span><span className={styles.clementine}>d</span><span className={styles.nectarine}>e</span><span className={styles.highlighter}>l</span><span className={styles.blue}>i</span><span className={styles.pink}>n</span><span className={styles.clementine}>e</span><span className={styles.nectarine}>s</span><span className={styles.highlighter}>:</span> Nothing NSFW, illegal, or discriminatory. No spam. Be cool to each other.
          </p>
          {inviteUrl ? (
            <div>
              <p>Thank you for your interest! Join us here:</p>
              <a href={inviteUrl}>{inviteUrl}</a>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.field}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <div className={styles.error}>
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <div className={styles.error}>
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="why">Why you want to join:</label>
                <textarea
                  id="why"
                  {...register('why', { required: 'Please tell us why you want to join' })}
                />
                {errors.why && (
                  <div className={styles.error}>
                    {errors.why.message}
                  </div>
                )}
              </div>
              {errors.root && (
                <div className={styles.rootError}>
                  {errors.root.message}
                </div>
              )}
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  )
}
