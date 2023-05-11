import style from './style.module.scss'
import Image from 'next/image'
import Icon from '../../icon/clock.png'
import Icon1 from '../../icon/parking-sign.png'
import Icon2 from '../../icon/parking.png'
import Desc from '../../image/parking.jpg'

const homePage = () => {
    return (
        <>
            {/* section banner start */}
            <div className={`${style.lala} container-fluid d-flex row align-items-center gx-0`}>
                <div className=' container col-md-8 col-lg-6 text-light text-center'>
                    <h2>Parking Web</h2>
                    <p className='my-4 lh-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia, odit soluta consequatur doloribus laudantium saepe laboriosam aspernatur distinctio sit!</p>
                    <button className='btn btn-outline-secondary'>Boking</button>
                </div>
            </div>
            {/* section banner end */}

            {/* section icon start */}
            <div className='container-fluid my-5'>
                <div className='container'>
                    <div className='row text-center '>
                        <div className={`col-md-4`}>
                            <Image className='img-fluid'
                                src={Icon} alt={''}
                                width={100}
                                height={100}
                            />
                            <div>
                                <h2>Clock</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <Image className='img-fluid'
                                src={Icon1} alt={''}
                                width={100}
                                height={100}
                            />
                            <h2>GPS</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={`col-md-4`}>
                            <Image className='img-fluid'
                                src={Icon2} alt={''}
                                width={100}
                                height={100}
                            />
                            <h2>Parking</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div >
            {/* section icon end */}
            {/* section desc start */}
            <div className="container-fluid">
                <div className="container border border-secondary">
                    <div className="row">
                        <div className="col-md-6 gx-0">
                            <Image className='img-fluid'
                                src={Desc} alt={''} />
                        </div>
                        <div className="col-md-6">
                            <h2 className='text-center mt-3'>Description</h2>
                            <p className='my-4 d-none d-md-none d-lg-block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore omnis molestiae officia laborum, quis dolorum obcaecati? Culpa, quas veniam! Illum nisi pariatur accusantium mollitia, autem suscipit sunt nam dignissimos veritatis! Provident unde ab distinctio nesciunt, quis nostrum rerum cum quae alias reprehenderit doloremque dignissimos tempore sed voluptatum est incidunt iure. Excepturi, eaque, error dolorem commodi ut, modi nobis asperiores magni delectus est minus rem quisquam recusandae mollitia cupiditate totam sunt quam vero nostrum earum magnam. Quidem animi vitae totam fuga.</p>
                            <p className='my-4 d-sm-block d-lg-none'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolorum corrupti praesentium a ipsam, reprehenderit eaque, qui facilis maiores libero ea voluptatem aperiam eos eveniet explicabo architecto nisi dignissimos. Provident.</p>
                            <button className='btn btn-secondary btn-md d-block mx-auto'>Lets Go</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* section desc end  */}
        </>
    )
}

export default homePage;