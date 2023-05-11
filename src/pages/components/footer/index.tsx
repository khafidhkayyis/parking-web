import style from './styles.module.scss'
const footer = () => {
    return (
        <>
            <div className={`${style.Bg} container-fluid mt-5`}>
                <div className="container">
                    <div className="row text-light py-5">
                        <div className="col-md-4 my-3">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, suscipit odit mollitia officiis soluta dicta vel aliquid et eum quis?</p>
                        </div>
                        <div className="col-md-4 my-3">
                            <h4>Companny</h4>
                            <ul>
                                <li>About</li>
                                <li>FAQ</li>
                                <li>Return Policy</li>
                                <li>Journal</li>
                                <li>Pulse Check</li>
                            </ul>
                        </div>
                        <div className="col-md-4 my-3">
                            <h4>Newsletter</h4>
                            <form>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Email' />
                                </div>
                                <button type="submit" className="btn btn-primary d-block mx-auto">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default footer;