import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

interface FormValues {
    username: string;
    email: string;
    chanel: string;
    social: {
        twitter: string;
        facebook: string;
    };
    phoneNumbers: string[];
    age: number;
    dob: Date;
}

const Register = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            username: "quochuy",
            email: "",
            chanel: "",
            social: {
                twitter: "",
                facebook: "",
            },
            // phoneNumbers: ["", ""],
            age: 0,
            dob: new Date(),
        },
    });
    const { register, control, handleSubmit, formState, watch } = form;
    const { errors } = formState;
    // const { name, ref, onChange, onBlur } = register("username");

    const onSubmit = (data: FormValues) => {
        console.log("Form submitted", data);
    };

    const watchUserName = watch("username");

    renderCount++;

    return (
        <div>
            <h1>Login ({renderCount / 2})</h1>
            <h2>Watched Value({watchUserName})</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        {...register("username", {
                            required: "Usename bắt buộc phải nhập",
                        })}
                    />
                    <p className="error">{errors.username?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        {...register("email", {
                            required: "Email bắt buộc phải nhập",
                            pattern: {
                                value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                                message: "Email không đúng định dạng",
                            },
                            validate: {
                                notAdmin: (fieldValue) => {
                                    return (
                                        fieldValue !==
                                            "huyquoc12101996@gmail.com" ||
                                        "Nhập địa chỉ Email khác"
                                    );
                                },
                                notBlackListed: (fieldValue) => {
                                    return (
                                        !fieldValue.endsWith("baddomain.com") ||
                                        "Domain không được hỗ trợ"
                                    );
                                },
                            },
                        })}
                    />
                    <p className="error">{errors.email?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="chanel">Chanel</label>
                    <input
                        type="text"
                        id="chanel"
                        {...register("chanel", {
                            required: "Chanel bắt buộc phải nhập",
                        })}
                    />
                    <p className="error">{errors.chanel?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="twitter">Twitter</label>
                    <input
                        type="text"
                        id="twitter"
                        {...register("social.twitter", {
                            required: "twitter bắt buộc phải nhập",
                        })}
                    />
                    <p className="error">{errors.chanel?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="facebook">Facebook</label>
                    <input
                        type="text"
                        id="facebook"
                        {...register("social.facebook", {
                            required: "facebook bắt buộc phải nhập",
                        })}
                    />
                    <p className="error">{errors.chanel?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="primary-phone">Số điện thoại chính</label>
                    <input
                        type="text"
                        id="primary-phone"
                        {...register("phoneNumbers.0", {
                            required: "Số điện thoại bắt buộc phải nhập",
                        })}
                    />
                    <p className="error">{errors.chanel?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="secondary-phone">Số điện thoại phụ</label>
                    <input
                        type="text"
                        id="secondary-phone"
                        {...register("phoneNumbers.1", {
                            required: "Số điện thoại bắt buộc phải nhập",
                        })}
                    />
                    <p className="error">{errors.chanel?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="age">Tuổi</label>
                    <input
                        type="number"
                        id="age"
                        {...register("age", {
                            valueAsNumber: true,
                            required: "Số điện thoại bắt buộc phải nhập",
                        })}
                    />
                    <p className="error">{errors.chanel?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="dob">Ngày tháng</label>
                    <input
                        type="date"
                        id="dob"
                        {...register("dob", {
                            valueAsDate: true,
                            required: "Số điện thoại bắt buộc phải nhập",
                        })}
                    />
                    <p className="error">{errors.chanel?.message}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default Register;
