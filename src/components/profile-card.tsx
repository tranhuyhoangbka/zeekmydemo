import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  joinedDate: string;
  onEdit: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  email,
  phone,
  address,
  joinedDate,
  onEdit,
}) => {
  return (
    <div className="profile-card flex items-center ">
      {/* アバター */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* ユーザー情報 */}
      <div className="profile-info flex-1 ml-4">
        <h3 className="profile-name text-xl font-semibold">{name}</h3>
        <p className="profile-email text-sm mt-1">メールアドレス：{email}</p>
        {phone && (
          <p className="profile-phone text-sm mt-1">電話番号：{phone}</p>
        )}
        <p className="profile-joined text-sm mt-1">
          メンバー登録日：{joinedDate}
        </p>
        {address && (
          <p className="profile-address text-sm mt-1">住所：{address}</p>
        )}
      </div>

      {/* 編集ボタン */}
    </div>
  );
};
