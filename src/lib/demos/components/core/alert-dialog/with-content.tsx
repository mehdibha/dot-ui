import { Alert } from "@/lib/components/core/default/alert";

// import {
//   AlertDialogAction,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogRoot,
//   AlertDialogTrigger,
//   AlertDialogCancel,
//   AlertDialogTitle,
//   AlertDialogContent,
// } from "@/lib/components/core/default/alert-dialog";

export default function AlertDialogDemo() {
  return null;
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger variant="danger">Delete</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete project</AlertDialogTitle>
          <AlertDialogDescription>
            This project will be deleted, along with all of its settings.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Alert type="danger" variant="muted">
          This action is not reversible. Please be certain.
        </Alert>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
}
