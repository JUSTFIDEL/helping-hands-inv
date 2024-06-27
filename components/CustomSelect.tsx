import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = authFormSchema('sign-up')

interface CustomSelect {
  control: Control<z.infer<typeof formSchema>>
  name: FieldPath<z.infer<typeof formSchema>>
  label: string
  placeholder: string
}

const CustomSelect = ({ control, name, label, placeholder }: CustomSelect) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='form-label text-[16px] leading-[24px]'>
            Investment
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue
                  className='text-gray-500 text-[16px] leading-[24px]'
                  placeholder='Select an Investment'
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent className='bg-white'>
              <SelectItem value='₦10,000'>10000</SelectItem>
              <SelectItem value='₦20,000'>20000</SelectItem>
              <SelectItem value='₦50,000'>50000</SelectItem>
              <SelectItem value='₦100,000'>100000</SelectItem>
              <SelectItem value='₦200,000'>200000</SelectItem>
              <SelectItem value='₦500,000'>500000</SelectItem>
            </SelectContent>
          </Select>
          <FormDescription className='text-gray-700'>
            Kindly choose an investment.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

// const CustomSelect = ({ control, name, label, placeholder }: CustomSelect) => {
//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <div className='form-item'>
//           <FormLabel className='form-label'>{label}</FormLabel>
//           <div className='flex w-full flex-col'>
//             <FormControl>
//               <Input
//                 placeholder={placeholder}
//                 className='input-class'
//                 type={name === 'password' ? 'password' : 'text'}
//                 {...field}
//               />
//             </FormControl>
//             <FormMessage className='form-message mt-2' />
//           </div>
//         </div>
//       )}
//     />
//   )
// }

export default CustomSelect

// "use client"

// import Link from "next/link"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { Button } from "@/components/ui/button"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { toast } from "@/components/ui/use-toast"

// const FormSchema = z.object({
//   email: z
//     .string({
//       required_error: "Please select an Investment.",
//     })
//     .email(),
// })

// const form = useForm<z.infer<typeof FormSchema>>({
//   resolver: zodResolver(FormSchema),
// })

// function onSubmit(data: z.infer<typeof FormSchema>) {
//   toast({
//     title: "You submitted the following values:",
//     description: (
//       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//       </pre>
//     ),
//   })
// }
