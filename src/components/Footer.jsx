import footerlinks from '../constants/footer'

function Footer(){

    return(

                <footer>
                    <div className="info">
                        <p>More ways to shop : <span>Find an Apple Store </span>or <span> other retailer </span> near you . Or call 000800 040 1966</p>
                        <img src="/logo.svg" alt="Apple logo" />
                    </div>


                    <hr />

                    <div className="links">
                        <p>Copyright 2024 Apple.Inc . All rights reserved</p>

                        <ul>

                            {
                                footerlinks.map(({label , link})=>(
                                    <li key={label}>
                                    <a href={link}>{label}</a>
                                     </li>
                                ))
                            }

                        </ul>

                    </div>
                </footer>
    )

}

export default Footer;