import React from 'react'
import '../Books.css';

function Books() {
    return (
        <div className='book-section'>

            <div className='d-flex justify-content-center align-items-center' id='img-banner'>
                <div className='book-banner'>
                    <img  className="moe-books" src='Images/books/matter.jpg' />
                    <div className='titles'>
                        <h6>A COLLECTION OF POEMS</h6>
                        <h1>THE MATTER OF EXISTENCE</h1>
                        <h6 className='author-name'>CIARA ATTONG</h6>
                        <div className='book-btns'>
                            <a href='https://www.amazon.com/Matter-Existence-Collection-Poems/dp/B0C9S8P6K9/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='><button className='btn1'>BUY THE BOOK</button></a>
                            <a href='https://www.amazon.com/Matter-Existence-Collection-Poems/dp/B0C9S8P6K9/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='><button className='btn2'>READ SAMPLE</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row justify-content-center'>

                    <div className='col-12 col-md-6 col-lg-3'>
                        <div class="card">
                            <img src='/Images/books/bb.jpg' class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Butterfly Breaths</h5>
                                <p class="card-text">The collection is a collage of carefully articulated pieces structured to bring readers along my journey towards better self love and personal development, and perhaps it will encourage readers to embark on their own journeys.</p>
                                <a href="https://www.amazon.com/butterfly-breaths-Collection-Ciara-Attong-ebook/dp/B09RGQDWGN?ref_=ast_author_dp" class="btn btn-outline-primary">ORDER NOW</a>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-3'>

                        <div class="card">
                            <img src='/Images/books/d&c.jpg' class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dark & Cold</h5>
                                <p class="card-text">"For all your scars, my darling. Especially those."
                                    Will the broken and inexperienced Princess Ericia -an abused daughter and hopeful bride-to-be - step up to the challenge of ruling her divided kingdom?</p>
                                <a href="https://www.amazon.com/Dark-Cold-Book-ebook/dp/B09QZJ3LQJ?ref_=ast_author_dp" class="btn btn-outline-primary">ORDER NOW</a>
                            </div>

                        </div>
                    </div>


                    <div className='col-12 col-md-6 col-lg-3'>

                        <div class="card">
                            <img src='/Images/books/soulstings.jpg' class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Soul Strings</h5>
                                <p class="card-text">"Soul Strings" is the third collection of poems published by fiction novelist and poet, Ciara Attong, after "butterfly breaths: A Collection of Poems" and "euphorically chaotic dystopias: A Collection of Poems" (both published in 2022).</p>
                                <a href="https://www.amazon.com/Soul-Strings-Collection-Ciara-Attong-ebook/dp/B0BZN75BZ5?ref_=ast_author_dp" class="btn btn-outline-primary">ORDER NOW</a>
                            </div>

                        </div>

                    </div>


                    <div className='col-12 col-md-6 col-lg-3'>

                        <div class="card">
                            <img src='/Images/books/matter.jpg' class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">The Matter of Existence</h5>
                                <p class="card-text">The Matter of Existence" is a highly philosophical and introspective masterpiece which introduces themes
                                    that will help readers to examine their individualistic existence and redefine their relationship with
                                    life.</p>
                                <a href="https://www.amazon.com/Matter-Existence-Collection-Poems/dp/B0C9S8P6K9/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=" class="btn btn-outline-primary">ORDER NOW</a>
                            </div>

                        </div>

                    </div>

                    <div className='col-12 col-md-6 col-lg-3'>

                        <div class="card">
                            <img src='/Images/books/hollow.jpg' class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">The Hollow Aches</h5>
                                <p class="card-text">"The Hollow Aches: A Collection of Poems" is the fifth published book written and released by YA Author and Poet, Ciara Attong.</p>
                                <a href="https://www.amazon.com/Hollow-Aches-Collection-Poems/dp/B0C47RJZ5K/?_encoding=UTF8&pd_rd_w=CGfnv&content-id=amzn1.sym.579192ca-1482-4409-abe7-9e14f17ac827&pf_rd_p=579192ca-1482-4409-abe7-9e14f17ac827&pf_rd_r=139-3965222-0221239&pd_rd_wg=yBMAT&pd_rd_r=0748b7eb-5045-401d-adac-50734361d0e7&ref_=aufs_ap_sc_dsk" class="btn btn-outline-primary">ORDER NOW</a>
                            </div>

                        </div>

                    </div>

                    <div className='col-12 col-md-6 col-lg-3'>

                        <div class="card">
                            <img src='/Images/books/ecd.jpg' class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Euphorically Chaotic Disaters</h5>
                                <p class="card-text">This collection explores a persona's intrapersonal development as they experience interpersonal relationships (platonic and romantic). The story takes readers on a journey through the mind of an individual who sorts through each relationship experience, processing situations and emotions throughout the seasons, and making calculated decisions on how to move forward with the connected parties.</p>
                                <a href="https://www.amazon.com/euphorically-chaotic-dystopias-Collection-Poems-ebook/dp/B09RGSN2RG?ref_=ast_author_dp" class="btn btn-outline-primary">ORDER NOW</a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Books