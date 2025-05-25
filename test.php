<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1>hello</h1>
        <div class="test" data-id{{$test->test}}></div>

        @foreach($test as $t)
            <div class="test" data-id="{{$t->test}}"></div>
        @endforeach
    </div>
    <!-- test -->
     /**
     test comment */
     /*
     test comment 2
     */
     /*
     test comment 3
     */
     /*
</body>
</html>