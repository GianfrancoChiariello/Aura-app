import { ReactNode } from "react";


export interface Option {
    subTitle: String,
    value: String,
    anchor?: string | null,
    component?: ReactNode | null,
    button: string
}

interface Section {
title: string;
options: Option[];
}

export interface SettingsType {
[index: number]: Section[];
}

