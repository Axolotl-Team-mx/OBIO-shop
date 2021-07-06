from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Branch, Branch
from base.serializers.branch_serializers import BranchSerializer
from rest_framework import status

@api_view(['GET']) 
def getBranchs(request):
    try:
        branchs= Branch.objects.all()
        serializer =  BranchSerializer(branchs, many=True)
        return Response(serializer.data)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getBranch(request, pk):
    branch = Branch.objects.get(branchId=pk)
    serializer = BranchSerializer(brand, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser]) 
def updateBranch(request, pk):
    try:
        data=request.data
        branch=Branch.objects.get(branchId=pk)
        branch.branchName= data['name']
        branch.domId = data['dom']
        branch.save()
        message = {'detail': 'Update brand'}
        return Response(message)
    
    except Exception as e:
        print('Error details: ' + ' ' + str(e))
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def createBranch(request):
    try:
        data = request.data
        branch = Branch.objects.create(
            branchName = data['name'],
            domId = data['dom'],
        )
        branch.save()
        serializer = BranchSerializer(branch, many=False)
        return Response(serializer.data)
    except Exception as e:
        print(e)
        message = {'detail': 'Something bad happen'}
        return Response(message)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteBranch(request, pk):
    branch= Branch.objects.get(branchId=pk)
    branch.delete()
    return Response('Delete branch')