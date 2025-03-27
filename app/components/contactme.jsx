"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().required("Campo obligatorio"),
  phone: yup.number().required("Campo obligatorio"),
  name: yup.string().required("Campo obligatorio"),
  message: yup.string().required("Campo obligatorio")
})

export default function ContactMe() {

    const [notification, setNotification] = useState(false)
    const [loading, setLoading] = useState(false)
    const [advise, setAdvise] = useState(false);
    const {register, formState:{errors}, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = e => {
      try {
          setLoading(true)
          const templateID = 'template_daqatsl'
          console.log(e);
          sendFeedback(templateID,{
              name: e.name,
              phone: e.phone,
              email: e.email,
              message: e.message
          })
      } catch (error) {
          console.log(error)
      }
    }

    useEffect(() => {
        emailjs.init("6L20Y5YhkSrotW8Oh")
    })

    const sendFeedback = (templateID, variables) => {
        emailjs.send('service_5c0uop5', templateID, variables)
        .then(res => {
          setLoading(false)
            setAdvise(true)
            setTimeout(() => {
              setAdvise(false)
            },3000)
        })
        .catch( err => {
            console.log(err, 'No se envío el correo')
            setLoading(false)
        })
    }

    return(
      <section className="mt-10 px-4 lg:px-10" id="contactme">
        <div className="bg-red-elote rounded-3xl pt-5 lg:flex lg:items-center">
          {advise?<div className="bg-green-700 text-white p-5 fixed z-50 top-1/2
           right-0 rounded-2xl">
            <p className="text-2xl font-bold">Tus datos se han envíado correctamente.</p>
          </div>:null}
          <div className="order-2">
            <h2 className="text-white text-center text-3xl px-2 mb-5 lg:text-left font-bold">Vamos Por un Elote a tu evento, contáctanos</h2>
            <p className="text-white font-medium text-justify leading-9 px-6 lg:pl-0 md:text-2xl">Siempre presentes en los mejores momentos, porque sin elote no hay fiesta.</p>
            <br/>
            <p className="text-white font-medium text-justify leading-9 px-6 lg:pl-0 md:text-2xl">Déjanos tus datos, te contactaremos para responder todas tus dudas y brindarte una cotización personalizada.</p>
          </div>

          <div className="w-full mt-5 lg:order-1">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
              <input type="text" name="nombre" {...register("name")} placeholder="Nombre" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <p className='text-red-primary'>{errors.name?.message}</p>
              <input type="email" name="email" {...register("email")} placeholder="Correo" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <p className='text-red-primary'>{errors.email?.message}</p>
              <input type="tel" name="phone" {...register("phone")} placeholder="Teléfono" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <p className='text-red-primary'>{errors.phone?.message ? 'Formato de número incorrecto':null}</p>
              <textarea placeholder="Mensaje" name="comentario" {...register("message")} className="bg-red-300 rounded-2xl p-2 my-2 w-3/4 placeholder:font-bold placeholder:text-red-950 text-red-950"></textarea>
              <p className='text-red-primary'>{errors.message?.message}</p>
              {!loading ? <button type="submit" className="p-2 bg-white rounded-2xl w-3/4 font-bold mt-1 mb-5 text-red-950 cursor-pointer">Enviar</button>: null}
              {loading ?<div className="flex items-center mb-5">
                <p className="text-white mr-2">Enviando mensaje...</p>
                <span className="loader"></span>
              </div>:null}
            </form>
            <div className="p-2 max-lg:hidden lg:w-11/12 m-auto">
              <Image src="/img-mobile/banner-evento.png" alt="banner tecate" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="rounded-2xl"/>
            </div>
          </div>
          <video autoPlay muted loop className="w-11/12 md:w-1/2 lg:w-2/12  m-auto rounded-2xl border-2 lg:order-3 border-white lg:mr-5" width="320" height="240" controls preload="none">
          <source src="/videos/eventos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="p-2 lg:hidden">
          <a href="https://www.tecatepalnorte.com/lineup" target="_blank">
          <Image src="/img-mobile/banner-evento.png" alt="banner tecate" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="rounded-2xl"/>
          </a>
        </div>
        </div>
      </section>
    )
}