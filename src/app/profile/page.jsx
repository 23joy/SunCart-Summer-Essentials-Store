'use client'
import { UpdateProfile } from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user;
    return (
        <div className='m-10'>
            <Card className='max-w-96 mx-auto flex flex-col items-center bg-mauve-500 p-20'>
                <Avatar size='sm' className='w-20 h-20'>
                    <Avatar.Image alt="John Doe"
                        src={user?.image}
                        referrerPolicy='no-referrer'
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div>
                    <h2 className='text-xl font-bold'>UserName:{user?.name}</h2>
                    <p><span className='font-semibold'>UserID:</span>{user?.id}</p>
                    <p><span className='font-semibold'>UserEmail:</span>{user?.email}</p>
                </div>
                <UpdateProfile/>
            </Card>

        </div>
    );
};

export default ProfilePage;