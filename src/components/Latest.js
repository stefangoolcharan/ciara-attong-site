import React from 'react';
import './Latest.css';

const Latest = () => {
    return (
        <section className='new-release'>
            <div id='poster'>
                <h1 class="heading">Latest Release</h1>
                <a href="https://www.amazon.com/Matter-Existence-Collection-Poems-ebook/dp/B0CB217PFS/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr="><img src="Images/books/matter.jpg" alt="book" /></a>
                <div id="description">
                    <h2 class="heading">The Matter of Existence</h2>
                    <p>"The Matter of Existence" is a highly philosophical and introspective masterpiece which introduces themes
                        that will help readers to examine their individualistic existence and redefine their relationship with
                        life. 
                        <br />
                        Do you often wonder how you can make the most of your life? Where it all begins? What any of "this" is
                        really all about? Do you dote over discussions of purpose, passion or soul? Do you ever wonder what
                        happens when we come to life? Or about what we leave behind when we are gone?
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Latest