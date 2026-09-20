import footerLogo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div>

            <footer className=" border-t border-gray-200">
                <div className=' container mx-auto grid sm:grid-cols-1 md:grid-cols-4 pt-8 pb-15'>

                    <div className='text-center md:text-left'>
                        <img src={footerLogo} alt="" className='mx-auto md:mx-0' />
                        <p className='py-7'>Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>
                        <div className=''>
                            <ul className='flex gap-5 justify-center md:justify-start'>
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
   
                    <div className='hidden sm:block'>
                        <h2 className='font-semibold '>PRODUCT</h2>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Technologies</li>
                                <li>Project</li>
                            </ul>
                        </div>
                    </div>

                    <div className='hidden sm:block'>
                        <h2 className='font-semibold'>COMPANY</h2>
                        <div>
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>

                    <div className='hidden sm:block'>
                        <h2 className='font-semibold '>LEGAL</h2>
                        <div>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between container mx-auto mb-10'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div>
                        <ul className='flex gap-5'>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;