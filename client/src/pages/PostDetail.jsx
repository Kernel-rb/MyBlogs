import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import SystemDesignThumbnail from '../images/blog1.png'
import BigONotationThumbnail from '../images/blog2.png'

function PostDetail() {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'> Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'> Delete </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={SystemDesignThumbnail} alt='' />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptas neque pariatur ducimus assumenda. Odio corrupti ullam voluptatibus, ea doloribus quis ipsum cum nostrum quo ab temporibus architecto vero repellat non asperiores maiores, officiis omnis adipisci accusantium optio. Ipsa, explicabo.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum earum nihil, ipsum voluptatibus amet expedita nesciunt cumque et sed officiis. Pariatur, doloremque ad, fugit cumque laudantium asperiores iure tenetur mollitia perferendis ea recusandae illum inventore itaque sit ratione animi ullam voluptatem? Fuga, repellat a.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ab similique sit! Magnam voluptates, cupiditate eaque quia ratione itaque veritatis rerum eligendi aut accusamus blanditiis saepe aperiam expedita ipsum excepturi consectetur id sit quae nulla corrupti ducimus vel quas. Quibusdam cum quaerat ratione praesentium amet earum doloremque fugiat sed deserunt ab optio quae, voluptatum odio, incidunt numquam quas, magni unde expedita pariatur repellat natus labore libero! Minus repudiandae iste perspiciatis necessitatibus id, vitae sapiente quisquam, excepturi natus unde aspernatur blanditiis mollitia expedita minima labore facilis cupiditate ipsum quibusdam aperiam incidunt et tempore consequuntur maxime? Nostrum, tempora eum delectus laboriosam modi dolor error corporis, tempore quibusdam pariatur similique sapiente voluptate dolorem quo!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis incidunt tempora magni a non nihil voluptate et illum maiores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sunt laborum! Veritatis, ratione labore ea animi modi similique vitae inventore dolorum repellat vero facilis, quidem aliquam eos beatae provident neque sint numquam nesciunt hic! Voluptas nobis distinctio hic officia aspernatur. Corporis modi, accusamus exercitationem mollitia repudiandae, numquam deleniti, quod blanditiis eaque ipsam quia! Debitis, modi omnis nulla mollitia incidunt facere consectetur porro laudantium laboriosam a. Sit maxime doloribus expedita reprehenderit soluta vero tempora, libero unde sint quisquam accusamus! Fuga doloribus obcaecati doloremque animi expedita? A sequi numquam repellendus animi, vitae deleniti consectetur accusamus voluptatibus eius aliquid sunt labore nam vel doloribus voluptate ducimus blanditiis unde odit fugit cupiditate quaerat cumque culpa laudantium sed? Totam eaque autem, asperiores soluta consectetur tempora officiis hic omnis assumenda doloremque tempore sapiente in cumque facilis praesentium veniam eius quos similique maiores? Excepturi earum blanditiis ab! Dolorum quam, voluptate nostrum a ipsum illum! Eos ipsam corporis facilis nulla aliquam dolorem porro tempore maxime maiores quaerat. Velit saepe nisi ipsa laborum sapiente, similique itaque qui sed, ipsum voluptatem, cupiditate quisquam repellat labore illo facilis culpa quidem! Aperiam exercitationem maxime, reiciendis, vitae harum doloremque enim omnis ullam fuga ea excepturi blanditiis sit praesentium voluptate quae voluptates necessitatibus error.
        </p>
      </div>
    </section>
  )
}

export default PostDetail