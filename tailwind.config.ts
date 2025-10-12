import type { Config } from 'tailwindcss';

const config: Config = {
    theme:{
        extend:{
            colors:{
                primary:"#6B9071",
                secondary:"#AEC3B0",
                schemaWhite:"#E3EED4",
                darkModePrimary:"#0F2A1D",
                darkModeSecondary:"#375534"
            }, 
            fontSize:{
                xs:"0.75rem",
                sm:"0.875rem",
                base:"1rem",
                lg:"1.125rem",
                xl:"1.25rem",
                "2xl":"1.5rem",
                "3xl":"1.875rem",
                "4xl":"2.25rem",
                "5xl":"3rem",
                "6xl":"4rem",
            }
        }
    }
}


export default config