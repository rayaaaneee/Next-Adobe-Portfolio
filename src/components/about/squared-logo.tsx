import { forwardRef } from 'react';

import cn from '@/utils/function/cn';
import assertDefined from '@/utils/function/assert-defined';

import ClassNameInterface from '@/utils/interface/classname';


const SquaredLogo = forwardRef<HTMLDivElement, ClassNameInterface>(({ className, id }, ref) => {

    //calc(-#{$coefficient} * #{$spacement})
    const backgrounds: string[] = [
        "bg-triangle-yellow top-[var(--spacement)] left-[calc(-var(--coef)*var(--spacement))]",
        "bg-triangle-orange bottom-[var(--spacement)]",
        "bg-triangle-red bottom-[calc(-(var(--coef))*var(--spacement))] right-[calc(-(var(--coef))*var(--spacement))]",
    ];

    return (
        <div 
        id={id} 
        ref={ref}
        style={{"--square-width": "30vw"} as React.CSSProperties}
        className={cn(
            'square-container', 
            'h-[var(--square-width)] w-[var(--square-width)]',
            'relative z-0 flex items-center justify-center transition-colors duration-300',
            'bg-contain bg-no-repeat pointer-events-none overflow-visible',
            className
        )}> 
            { backgrounds.map((squareClassName, i) => (
                <div 
                style={{
                    "--coef": "1.3",
                    "--spacement": "9vw",
                } as React.CSSProperties}
                key={i} 
                className={`square absolute rounded-[10%] w-[37vw] h-[37vw] ${squareClassName}`} />
            )) }
            <div className="main-square relative flex items-center justify-center rounded-[18%] bg-blanchedalmond w-full h-full font-adobebold">
                <h1 className='header-text absolute'>Adobe Portfolio</h1>
                <h1 id='port' className='text-white'>P</h1>
                <h2 id='folio' className='text-white'>f</h2>
                <p className='author italic absolute'>By <span>{ assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME') }</span></p>
            </div>
        </div>
    )
});

SquaredLogo.displayName = 'SquaredLogo';

export default SquaredLogo;

/*

    Apply this SCSS as tailwindcss, change all vw to %, vw only for the container

    .square-container {
        
        $square-width: 30vw;
        z-index: 0;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s, color 0.3s;
        background-size: contain;
        background-repeat: no-repeat;
        width: $square-width;
        height: $square-width;
        top: calc(50% - ($square-width / 2));
        left: 3vw;
        pointer-events: none;
        overflow: visible;

        .square {

            position: absolute;
            width: 37vw;
            height: 37vw;

            border-radius: 10%;

            $spacement: 9vw;
            $coefficient: 1.3;

            &.one {
                background-color: $index-triangle-yellow-background-color;
                top: -$spacement;
                left: calc(-#{$coefficient} * #{$spacement});
            }

            &.two {
                background-color: $index-triangle-orange-background-color;
                bottom: -$spacement;
            }

            &.three {
                background-color: $index-triangle-red-background-color;
                top: calc(-#{$coefficient} * #{$spacement});
                right: calc(-#{$coefficient} * #{$spacement});
            }

        }
        
        .main-square {
            
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 18%;
            position: relative;
            background-color: blanchedalmond;
            width: 100%;
            height: 100%;

            * {
                margin: 0;
                font-family: 'AdobeBold', sans-serif;
                // color: rgb(239 222 144); Yellow from logo
                color: white;
            }

            h1, h2 {
                line-height: 1;
                // -webkit-text-stroke-width: 0.3vw;
                // -webkit-text-stroke-color: blanchedalmond;
            }

            p.author, h1.header-text {

                position: absolute;
                
                &.author {

                    bottom: -15%; 
                    font-size: 2vw; 

                    span {
                        font-style: italic;
                    }

                }

                &.header-text {
                    bottom: 103%;
                    font-size: 5vw;
                    font-weight: 600;
                    font-family: 'AdobeBold', sans-serif;
                    color: $main-title-color;
                }

                &, * {
                    font-family: Poppins, sans-serif;
                    font-weight: 500;
                    color: black;
                }
            }

            h1.port {
                font-size: 20.2vw;
                position: absolute;
                top: 15%;
                left: 16%;
                z-index: 1;
            }

            h2.folio {
                position: absolute;
                left: 58.5%;
                top: 16%;
                font-size: 20vw;
                z-index: 2;
            }

        }
    }

*/