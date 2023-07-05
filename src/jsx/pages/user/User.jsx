import { Icon } from "@iconify/react"
import { useState } from "react"

const User = () => {

    const [state, setState] = useState(false)
    return (
        <div className="user-page">
            <div className="left">
                <h1>خوش آمدید !</h1>
                "به فروشگاه آرایشی ما خوش آمدید! این بخش برای ورود به حساب کاربری خود و دسترسی به تجربه خریدی شگفت‌انگیز در دنیای آرایش و زیبایی طراحی شده است.

                با ورود به حساب کاربری خود، شما به دنیایی از لوازم آرایشی و محصولات زیبایی دسترسی خواهید داشت. این شامل کرم‌های پودر، رژلب‌های جذاب، لوازم آرایش چشم، لوازم آرایش پوست و بسیاری از محصولات دیگر می‌شود که برای شما در نظر گرفته شده‌اند.

                اگر قبلاً حساب کاربری در فروشگاه ما ایجاد کرده‌اید، با استفاده از نام کاربری و رمز عبور خود می‌توانید وارد شوید. در صورتی که هنوز عضو نشده‌اید، میتوانید با کلیک بر روی "ثبت نام" حساب کاربری جدیدی ایجاد کنید و از امکانات ویژه فروشگاه بهره‌مند شوید.

                وارد شدن به حساب کاربری شما به شما امکان می‌دهد تا از تخفیفات و پیشنهادات ویژه، بهره‌برداری کنید و به راحتی محصولات مورد علاقه خود را در سبد خرید قرار دهید. همچنین، شما میتوانید تاریخچه سفارشات خود را مشاهده کرده و به راحتی اطلاعات حساب خود را به‌روزرسانی کنید.

                لطفاً در نگهداری اطلاعات حساب کاربری خود محتاط باشید و آن‌ها را با دیگران به اشتراک نگذارید. امنیت و حریم خصوصی شما برای ما بسیار مهم است و ما تمام

                تلاش خود را برای حفظ آن انجام خواهیم داد."

                با این متن، کاربران شما می‌توانند اطلاعات حساب کاربری خود را وارد کنند و به منابع و امکانات اختصاصی سایت شما دسترسی پیدا کنند. البته، شما میتوانید این متن را به میزان و اطلاعات خاص مورد نیاز خود تغییر دهید.
            </div>
            <form className="right" action="#">
                <h1 className="form-header">
                    {!state ? "ورود کاربران" : "ثبت نام"}
                </h1>
                <div className="form-groups">
                    <fieldset>
                        <legend>
                            <Icon icon="ph:user-bold" />
                            <span>
                                نام کاربری
                            </span>
                        </legend>
                        <input type="text" name="userName" />
                    </fieldset>
                    <fieldset>
                        <legend>
                            <Icon icon="mdi:password-outline" />
                            <span>
                                پسوورد
                            </span>
                        </legend>
                        <input type="text" name="password" />
                    </fieldset>
                    {
                        state ?
                            <>
                                <fieldset>
                                    <legend>
                                        <Icon icon="mdi:password-outline" />
                                        <span>
                                            تکرار پسوورد
                                        </span>
                                    </legend>
                                    <input type="text" name="password-confirm" />
                                </fieldset>
                                <fieldset>
                                    <legend>
                                    <Icon icon="mdi:email-edit-outline" />                                        <span>
                                            ایمیل
                                        </span>
                                    </legend>
                                    <input type="text" name="password-confirm" />
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        <Icon icon="mdi:rename" />
                                        <span>
                                            نام و نام خانواداگی
                                        </span>
                                    </legend>
                                    <input type="name" name="password-confirm" />
                                </fieldset>
                            </>
                            : ""
                    }
                </div>
                <div className="form-shift">
                    <small onClick={() => { setState(!state) }}>
                        حساب کاربری ندارید؟ کلیلک کنید
                    </small>
                </div>
                <div className="form-buttons">

                    <button>
                        <Icon icon="solar:login-broken" />
                        <span>ورود</span>
                    </button>

                </div>

            </form>
        </div>
    )
}

export default User