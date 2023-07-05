import { Icon } from '@iconify/react'
import React from 'react'

const CreatePostPage = () => {
    return (
        <form className='create-post-page' action='#'>
            <h1 className="form-header">
                ایجاد محصول جدید
            </h1>

            <div className="form-body">
                <fieldset>
                    <legend>
                        <Icon icon="streamline:money-cashier-tag-codes-tags-tag-product-label" />
                        <span> عنوان محصول</span>
                    </legend>
                    <input type="text" name='title' />
                </fieldset>
                <fieldset>
                    <legend>
                        <Icon icon="iconamoon:category" />
                        <span> دسته بندی</span>
                    </legend>
                    <input type="text" name='category' />
                </fieldset>
                <fieldset>
                    <legend>
                        <Icon icon="logos:createjs" />
                        <span> اصالت</span>
                    </legend>
                    <input type="text" name='made' />
                </fieldset>
                <fieldset>
                    <legend>
                        <Icon icon="gis:search-country" />
                        <span> ساخت کشور</span>
                    </legend>
                    <input type="text" name='country' />
                </fieldset>
            </div>

            <div className="form-buttons">
                <button>
                    <Icon icon="mdi:add-bold" />
                    <span>
                        ایجاد دسته بندی
                    </span>
                </button>
            </div>



        </form>
    )
}

export default CreatePostPage