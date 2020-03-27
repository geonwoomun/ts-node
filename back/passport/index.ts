import * as passport from 'passport';
import User from '../models/user';
import local from './local';

export default () => {
    passport.serializeUser<User, number>((user: User, done) => {
        done(null, user.id); // 유저 정보를 다 하기엔 용량이 크다.
    }); // 로그인 할 때 한번 실행

    passport.deserializeUser<User, number>(async (id: number, done) => {
        try {
            const user = await User.findOne({
                where: {id},
            });
            if (!user) {
                return done(new Error('no user'));
            }
            return done(null, user);// => req.user 가 된다
        } catch (err) {
            console.error(err);
            return done(err);
        }
    }); // 모든 요청에 대해서 한번씩 다 실행

    local();
}