import './TextBox.css'
import React from "react";

const TextBox = (props) => {

    const textStyle = {
        fontSize: (props.viewSize.width / 50)
    }

    const title = (id) => {
        switch (id) {
            case 0:
                return ("Persona")
            case 1:
                return ("Problem")
            case 2:
                return ("Designed for the top class")
            case 6:
                return ("Immerge yourself in your own work")
            case 13:
                return ("Stray dog issue")
            default:
                return
        }
    }

    const text = (id) => {
        switch (id) {
            case 0:
                return (<>
                        Generated persona is a Swiss banker living in Lausanne and relying on public
                        transports such as the metro to go by. Often needs to do some work on the go,
                        most of it by phone calls. <br/> <br/>
                        Fun fact: Original persona's face has been swapped with Clint Eastwood when we were curious
                        and trying for the first time the "modify region" tool of Midjourney AI.
                    </>)
            case 1:
                return ("Noise, packed metro, can't comfortably tend to work and calls on the go")
            case 2:
                return ("Booth built inside a metro wagon. Noise cancelling glass. " +
                    "Compact yet practical space for comfort and working on the go.")
            case 3:
                return (<>
                    This image comes from a workshop about the re-use of trash and we dived into how we could bring
                    life back to old clothes. It was the image that best represented our vision of the patchwork jacket
                    end product we would get by recycling textiles, fibers and paddings from old clothes. <br/><br/>
                    The powerful and confident posture felt perfect and puts the end product forward well.
                    </>)
            case 4:
                return (<>
                    We envisioned how the customer experience would be and we imagined that local shop were one could
                    bring his own unused clothes and even pick some of the textiles he would like his patchwork jacket
                    to be made from. <br/><br/>
                    The shop owner wearing one of the jackets and interacting with the clients represented well
                    our vision of the shop.
                </>)
            case 5:
                return (<>
                    We imagined the possibility for advanced virtual reality to help build project where using your
                    hands and the space around you lets you view, shape and model everything around you.<br/><br/>
                    Create shapes, pick them up, resize your models, make it feel like you're viewing the real thing
                    or scale it down to work with all the ease you need.
                    </>)
            case 6:
                return ("Feel your modeling project by being inside your work. Review from any angle and appreciated " +
                    "the power of this technology help you with your projects.")
            case 7:
                return ("This image aimed to represent the happiness of an architect using this technology and a site " +
                    "manager / worker being happy about their newly build urban area as the whole experience " +
                    "from virtual project to reality was made smoother and without mistake thanks from the " +
                    "help of this technology.")
            case 8:
                return ("These exoskeletons are supposed to help people who partially or totally lost motricity " +
                    "and make them able to move again with ease. We had a vast specter of design be it very visible" +
                    " and clunky to something more discreet.")
            case 9:
                return ("These exoskeletons are supposed to help people who partially or totally lost motricity " +
                    "and make them able to move again with ease. We had a vast specter of design be it very visible" +
                    " and clunky to something more discreet.")
            case 10:
                return ("We also explored the style potential of such exoskeletons. After all, much like a car, " +
                    "being aesthetically interesting doesn't prevent it to achieve its purpose, even to some extremes.")
            case 11:
                return (<>
                    Powerful, modern looking. Why not even augment the capability of the bearer of such device?
                    One could see his strength increased in this robust looking device. The yellow is a nice touch to
                    symbolize the power and heavy duty looking exoskeleton and is reminiscent of Boston Dynamic's work.
                    <br/><br/>
                    The back pose is perfect to display our design and intent. Every limb finds some support and we
                    can see the power source as a form of backpack built into it.
                    </>)
            case 12:
                return ("A view from Rhodes town generated from Midjourney. We wanted to showcase the castle " +
                    "structures, shore and typical architecture of the town of Rhodes.")
            case 13:
                return ("Our dog here is one of many living in Rhodes town and wandering around and our aim is " +
                    "to adapt the existing space and structure to make it better for them while reducing the " +
                    "potential discomfort of them being around for the locals and tourists.")
            case 14:
                return ("Beach showers could be used so that dogs can also get some fresh water in the heavy heat. " +
                    "We liked a lot how bizarre and fun this picture looks with dogs just enjoying a shower in there. " +
                    "It's not the most coherent solution but definitely interesting looking.")
            case 15:
                return ("This dog park was generated taking into account the key architecture features of Rhodes with " +
                    "the castle looking structures and walls that are somewhat eroded / in slight ruins. This helps " +
                    "make the park feel like a part of the town.")
            case 16:
                return ("Starting from a base image and an inspiration created out of collage we achieve surprisingly " +
                    "creative results especially when iterating over newly generating images with the same process. " +
                    "Trying to strive away from the gloominess of the base image to something more dream-like.")
            case 17:
                return ("This was the initial base image used as a starting point for blending with Midjourney AI")
            case 18:
                return (<>
                    In the dead world the tower slumbers.<br/>
                    It is stuck in a dream, it feels like a curse.<br/><br/>
                    This dream cultivated for so long,<br/>
                    getting so strong about it's unsung song,<br/>
                    breaks open into the dead landscape,<br/>
                    leaving life and colors as the dream escape.
                    </>)
            default:
                return
        }
    }

    return (
        <div className="TextBoxWrapper">
            <div className="TextBox" style={textStyle}>
                <h1 className="TextTitle">
                    {title(props.id)}
                </h1>
                <p className="TextContent">
                    {text(props.id)}
                </p>
            </div>
        </div>
    )
}

export default TextBox
